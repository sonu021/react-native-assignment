
import { RefreshControl, StyleSheet, VirtualizedList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppTextInput, Container, Icon, useTheme } from 'react-native-basic-elements'
import ProductCard from '../Components/ProductCard'
import HomeHeader from '../Components/Header/HomeHeader'
import Modal from "react-native-modal";
import FilterModal from '../Components/Modal/FilterModal'
import { FONTS } from '../Components/Constants/Fonts'
import { useDispatch, useSelector } from 'react-redux'
import { setPage, setProducts } from '../Redux/reducer/Product'
import AllProducts from '../ProductList/AllProducts.json'
import Toast from 'react-native-simple-toast';

const ListScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    const { currentPageProducts, pagination, products } = useSelector((state) => state.Product);

    const getItemCount = _data => 2000;

    useEffect(() => {
        fetchData();
    }, [dispatch]);

    const fetchData = async () => {
        try {
            dispatch(setProducts(AllProducts));
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
        finally {
            setRefreshing(false);
        }
    };

    const getItem = (_data, index) => ({
        ..._data[index]
    });


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCancel = () => {
        toggleModal();
    };
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
        fetchData()
    }, []);


    const onSearch = (text) => {
        if (text == '') {
            dispatch(setProducts(AllProducts));
        }
        else {
            let tempListData = currentPageProducts.filter(item => {
                return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
            })
            if (tempListData.length === 0) {
                Toast.show('No matching items found.', Toast.SHORT);
            }
            else {
                dispatch(setProducts(tempListData));
            }

        }

    }
    const onEndReached = () => {
        // Fetch more data or update the page when reaching the end
        if (pagination.currentPage < 50) {
            dispatch(setPage(pagination.currentPage + 1));
        }
    };


    return (
        <Container>
            <HomeHeader
                toggleModal={() => toggleModal()}
            />

            <AppTextInput
                placeholder='Search Here'
                inputContainerStyle={styles.app_txt_input_container_style}
                style={styles.app_txt_style}
                rightAction={
                    <Icon
                        name='search'
                        type='Feather'
                        color={'#7FC7D9'}
                    />
                }
                onChangeText={(txt) => {
                    onSearch(txt)
                    setSearch(txt)
                }}
            />
            {/* VirtualizedList component to improve the performance so that it can render a list of 10000+ items */}
            <VirtualizedList
                data={products}
                removeClippedSubviews
                horizontal={false}
                initialNumToRender={20}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container_style}
                renderItem={({ item, index }) => {
                    return (
                        <ProductCard
                            item={item}
                            key={index}
                        />
                    )
                }}
                maxToRenderPerBatch={20}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.3}
                getItemCount={getItemCount}
                getItem={getItem}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
            {/* Modal */}
            <Modal
                isVisible={isModalVisible}
                style={styles.modal_view}
                backdropOpacity={0.5}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
            >
                <FilterModal
                    handleCancel={() => handleCancel()}
                />
            </Modal>

        </Container>
    )
}

export default ListScreen

const styles = StyleSheet.create({

    container_style: {
        marginTop: 10,
        marginHorizontal: 15,
        paddingBottom: 30
    },
    modal_view: {
        marginHorizontal: 0,
        justifyContent: 'flex-end',
        marginBottom: 0
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        width: '90%'
    },
    app_txt_input_container_style: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderWidth: 0.5,
    }
})