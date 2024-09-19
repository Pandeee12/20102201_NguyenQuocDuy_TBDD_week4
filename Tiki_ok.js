import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'data:image/png;base64,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' }} // Replace with your image URL
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productSubtitle}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <Text style={styles.productOriginalPrice}>141.800 đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.button}>
              <AntDesign name="minus" size={24} color='black' />
            </TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity style={[styles.button,{marginLeft: 10}]}>
              <MaterialIcons name="add" size={24} color='black' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.laterButton}>
              <Text style={styles.laterButtonText}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.discountContainer}>
        <Text style={styles.discountText}>Mã giảm giá đã lưu</Text>
        <TouchableOpacity style={styles.viewDiscountButton}>
          <Text style={styles.viewDiscountText}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.discountCodeButton}>
          <View style={styles.discountCodeIndicator}></View>
          <Text style={styles.discountCodeText}>Mã giảm giá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.giftCardContainer}>
        <Text style={styles.giftCardText}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <TouchableOpacity style={styles.enterGiftCardButton}>
          <Text style={styles.enterGiftCardText}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Tạm tính</Text>
        <Text style={styles.totalPrice}>141.800 đ</Text>
      </View>

      <View style={{width:'100%',height: 100,backgroundColor: '#cbded5'}}></View>
      
      
      <View style={styles.totalContainer}>
        <Text style={{fontWeight: 400,fontSize: 18}}>Thành tiền</Text>
        <Text style={styles.totalPrice}>141.800 đ</Text>
      </View>

      <TouchableOpacity style={{margin:'5%',width: '90%',height: 38,backgroundColor:'red'
        ,color:'white',fontSize:26,alignItems:'center',justifyContent:'center'}}>
          TIẾN HÀNH ĐẶT HÀNG
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  productImage: {
    height: 206,
    width: 120,
  },
  productInfo: {
    marginLeft: 10,
    flex: 1,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  productSubtitle: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 10,
  },
  productPrice: {
    fontWeight: '700',
    fontSize: 20,
    color: 'red',
    marginTop: 20,
  },
  productOriginalPrice: {
    fontWeight: '200',
    fontSize: 20,
    marginTop: 20,
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 5,
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 10,
  },
  laterButton: {
    marginLeft: 69,
  },
  laterButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#134FEC',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 20,
  },
  discountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewDiscountButton: {
    marginLeft: 20,
  },
  viewDiscountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#134FEC',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginBottom: 20,
  },
  discountCodeButton: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  discountCodeIndicator: {
    width: 30,
    height: 15,
    backgroundColor: 'yellow',
    marginLeft: 10,
  },
  discountCodeText: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  applyButton: {
    backgroundColor: '#0A5EB7',
    width: '30%',
    height: 40,
    borderWidth: 1,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  separator: {
    width: '100%',
    height: 20,
    backgroundColor: '#cbded5',
  },
  giftCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 20,
  },
  giftCardText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  enterGiftCardButton: {
    marginLeft: 10,
  },
  enterGiftCardText: {
    color: '#134FEC',
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 20,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
    marginLeft: 180,
  },
});

export default YourApp;
