import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {Text, View,Image,Button,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      
      <View style={{ flexDirection: 'row'}}>
        <Image style={{height: 70, width: 70, margin: 10}}
        source={{uri: 'data:image/png;base64,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'}}
        ></Image>
        <Text style={{fontSize: 16,fontWeight: 'bold',margin: 10}}>USB Bluetooth Music Receiver &emsp; &emsp;
        HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>

      <View style={{alignItems: 'center',marginTop:20}}>
            <Text style={{fontSize: 20,fontWeight: 'bold'}}>Cực kỳ hài lòng</Text>
          
          <View style={{flexDirection: 'row',marginTop: 10}}>
           <Image style={{height: 39, width: 39, margin: 10}}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABHCAYAAACtUKHoAAAC/klEQVR4Xu2a0XHjIBRFXYI/HUuZcQlbQkrYElxCSnAJ6SDbwW4HTgf+zMxKsktgUApIwBYe+QkhEEI8BHfm/nhkRjzriGt4qxVSkc/Njlw2O/h5Uo9olb3SYnuAnyf1iBXsVJfZEX6eJBHHsa6yb+6EpYY4jqJgCUsN1efsKAqWsBxQG8c7lqf1Gl6X1Ij8z/awYLR4eoXXJTV6wDFhqZYMx4SlQjIcE5YKSXEUTlg+SoWjcMKyJRWOwgnLlpQ4CicsbyKX3bpTHLlJwnKlh+Pd7Fr4/ehEy+2/TmH6HDuWBjgKx40lKZ9/S4qidsxYMhz/dAoy7Hc4TjSqzzmRFGTIcWI5CsfGpMhf4HiL10gchePDciSOwgSOt2iRYvMiKYKRo8LSEserafn0BsedTdejLTtElm1WG16jh6Kx1L2rz9mlc3Hk/jpnJ16bh2K1Rav8AL8Uq2mZ6WF/zUgxP20MwS/TRaVB9NgZbOkusw8lgkOKCdHOi32sFr8gsLmxOf6C87YS37tiL0Hr/ITNfE58bnC+k2kxmU2WrVwpdEQHs5UrhbggaGcrVwoms7F7NM5WrnRFtMr/dm4Si22zlSthRHS2F/tYoVkQXGQrV/Kd2fiL3Wm2ciVabWdHlBb5Ad5HMGr33M/loNuivOx2hNp/odNV6MpBHvQatTFN7CCx9IKjcGhY+sRROCgsfeIoHBSWXnEUDgVLDDgKB4ElBhyFg8DSGsdm34o3m1j/iceOJf/D27lpE9/2re4YTbDPhrtb0QZH1b6V1T4b5iZio557Yc19q9H7bFixHIOj6b7VbZ8tf4PjDBgnlkZNvvxcs3zewzF0xZ6avdHThhFL7a7CiQ4kDBHF10Sscxru4kxQc0HAheUgjo7PBHUyG6omYiWOIFu5Ekd04OAFD5ZSHOds9mhJgSiO3n5pz71mtnKlvgUBBZYQR9Ns5UqyzOa1t1+IVtvbL2mZrVwJZDa/WN5xnChbuVIbUa9YchxdZCtX4guCVywxP1V9slmMfgD/LUBbUZNfZAAAAABJRU5ErkJggg=='}}
        ></Image>
        <Image style={{height: 39, width: 39, margin: 10}}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABHCAYAAACtUKHoAAAC/klEQVR4Xu2a0XHjIBRFXYI/HUuZcQlbQkrYElxCSnAJ6SDbwW4HTgf+zMxKsktgUApIwBYe+QkhEEI8BHfm/nhkRjzriGt4qxVSkc/Njlw2O/h5Uo9olb3SYnuAnyf1iBXsVJfZEX6eJBHHsa6yb+6EpYY4jqJgCUsN1efsKAqWsBxQG8c7lqf1Gl6X1Ij8z/awYLR4eoXXJTV6wDFhqZYMx4SlQjIcE5YKSXEUTlg+SoWjcMKyJRWOwgnLlpQ4CicsbyKX3bpTHLlJwnKlh+Pd7Fr4/ehEy+2/TmH6HDuWBjgKx40lKZ9/S4qidsxYMhz/dAoy7Hc4TjSqzzmRFGTIcWI5CsfGpMhf4HiL10gchePDciSOwgSOt2iRYvMiKYKRo8LSEserafn0BsedTdejLTtElm1WG16jh6Kx1L2rz9mlc3Hk/jpnJ16bh2K1Rav8AL8Uq2mZ6WF/zUgxP20MwS/TRaVB9NgZbOkusw8lgkOKCdHOi32sFr8gsLmxOf6C87YS37tiL0Hr/ITNfE58bnC+k2kxmU2WrVwpdEQHs5UrhbggaGcrVwoms7F7NM5WrnRFtMr/dm4Si22zlSthRHS2F/tYoVkQXGQrV/Kd2fiL3Wm2ciVabWdHlBb5Ad5HMGr33M/loNuivOx2hNp/odNV6MpBHvQatTFN7CCx9IKjcGhY+sRROCgsfeIoHBSWXnEUDgVLDDgKB4ElBhyFg8DSGsdm34o3m1j/iceOJf/D27lpE9/2re4YTbDPhrtb0QZH1b6V1T4b5iZio557Yc19q9H7bFixHIOj6b7VbZ8tf4PjDBgnlkZNvvxcs3zewzF0xZ6avdHThhFL7a7CiQ4kDBHF10Sscxru4kxQc0HAheUgjo7PBHUyG6omYiWOIFu5Ekd04OAFD5ZSHOds9mhJgSiO3n5pz71mtnKlvgUBBZYQR9Ns5UqyzOa1t1+IVtvbL2mZrVwJZDa/WN5xnChbuVIbUa9YchxdZCtX4guCVywxP1V9slmMfgD/LUBbUZNfZAAAAABJRU5ErkJggg=='}}
        ></Image>
        <Image style={{height: 39, width: 39, margin: 10}}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABHCAYAAACtUKHoAAAC/klEQVR4Xu2a0XHjIBRFXYI/HUuZcQlbQkrYElxCSnAJ6SDbwW4HTgf+zMxKsktgUApIwBYe+QkhEEI8BHfm/nhkRjzriGt4qxVSkc/Njlw2O/h5Uo9olb3SYnuAnyf1iBXsVJfZEX6eJBHHsa6yb+6EpYY4jqJgCUsN1efsKAqWsBxQG8c7lqf1Gl6X1Ij8z/awYLR4eoXXJTV6wDFhqZYMx4SlQjIcE5YKSXEUTlg+SoWjcMKyJRWOwgnLlpQ4CicsbyKX3bpTHLlJwnKlh+Pd7Fr4/ehEy+2/TmH6HDuWBjgKx40lKZ9/S4qidsxYMhz/dAoy7Hc4TjSqzzmRFGTIcWI5CsfGpMhf4HiL10gchePDciSOwgSOt2iRYvMiKYKRo8LSEserafn0BsedTdejLTtElm1WG16jh6Kx1L2rz9mlc3Hk/jpnJ16bh2K1Rav8AL8Uq2mZ6WF/zUgxP20MwS/TRaVB9NgZbOkusw8lgkOKCdHOi32sFr8gsLmxOf6C87YS37tiL0Hr/ITNfE58bnC+k2kxmU2WrVwpdEQHs5UrhbggaGcrVwoms7F7NM5WrnRFtMr/dm4Si22zlSthRHS2F/tYoVkQXGQrV/Kd2fiL3Wm2ciVabWdHlBb5Ad5HMGr33M/loNuivOx2hNp/odNV6MpBHvQatTFN7CCx9IKjcGhY+sRROCgsfeIoHBSWXnEUDgVLDDgKB4ElBhyFg8DSGsdm34o3m1j/iceOJf/D27lpE9/2re4YTbDPhrtb0QZH1b6V1T4b5iZio557Yc19q9H7bFixHIOj6b7VbZ8tf4PjDBgnlkZNvvxcs3zewzF0xZ6avdHThhFL7a7CiQ4kDBHF10Sscxru4kxQc0HAheUgjo7PBHUyG6omYiWOIFu5Ekd04OAFD5ZSHOds9mhJgSiO3n5pz71mtnKlvgUBBZYQR9Ns5UqyzOa1t1+IVtvbL2mZrVwJZDa/WN5xnChbuVIbUa9YchxdZCtX4guCVywxP1V9slmMfgD/LUBbUZNfZAAAAABJRU5ErkJggg=='}}
        ></Image>
        <Image style={{height: 39, width: 39, margin: 10}}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABHCAYAAACtUKHoAAAC/klEQVR4Xu2a0XHjIBRFXYI/HUuZcQlbQkrYElxCSnAJ6SDbwW4HTgf+zMxKsktgUApIwBYe+QkhEEI8BHfm/nhkRjzriGt4qxVSkc/Njlw2O/h5Uo9olb3SYnuAnyf1iBXsVJfZEX6eJBHHsa6yb+6EpYY4jqJgCUsN1efsKAqWsBxQG8c7lqf1Gl6X1Ij8z/awYLR4eoXXJTV6wDFhqZYMx4SlQjIcE5YKSXEUTlg+SoWjcMKyJRWOwgnLlpQ4CicsbyKX3bpTHLlJwnKlh+Pd7Fr4/ehEy+2/TmH6HDuWBjgKx40lKZ9/S4qidsxYMhz/dAoy7Hc4TjSqzzmRFGTIcWI5CsfGpMhf4HiL10gchePDciSOwgSOt2iRYvMiKYKRo8LSEserafn0BsedTdejLTtElm1WG16jh6Kx1L2rz9mlc3Hk/jpnJ16bh2K1Rav8AL8Uq2mZ6WF/zUgxP20MwS/TRaVB9NgZbOkusw8lgkOKCdHOi32sFr8gsLmxOf6C87YS37tiL0Hr/ITNfE58bnC+k2kxmU2WrVwpdEQHs5UrhbggaGcrVwoms7F7NM5WrnRFtMr/dm4Si22zlSthRHS2F/tYoVkQXGQrV/Kd2fiL3Wm2ciVabWdHlBb5Ad5HMGr33M/loNuivOx2hNp/odNV6MpBHvQatTFN7CCx9IKjcGhY+sRROCgsfeIoHBSWXnEUDgVLDDgKB4ElBhyFg8DSGsdm34o3m1j/iceOJf/D27lpE9/2re4YTbDPhrtb0QZH1b6V1T4b5iZio557Yc19q9H7bFixHIOj6b7VbZ8tf4PjDBgnlkZNvvxcs3zewzF0xZ6avdHThhFL7a7CiQ4kDBHF10Sscxru4kxQc0HAheUgjo7PBHUyG6omYiWOIFu5Ekd04OAFD5ZSHOds9mhJgSiO3n5pz71mtnKlvgUBBZYQR9Ns5UqyzOa1t1+IVtvbL2mZrVwJZDa/WN5xnChbuVIbUa9YchxdZCtX4guCVywxP1V9slmMfgD/LUBbUZNfZAAAAABJRU5ErkJggg=='}}
        ></Image>
        <Image style={{height: 39, width: 39, margin: 10}}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABHCAYAAACtUKHoAAAC/klEQVR4Xu2a0XHjIBRFXYI/HUuZcQlbQkrYElxCSnAJ6SDbwW4HTgf+zMxKsktgUApIwBYe+QkhEEI8BHfm/nhkRjzriGt4qxVSkc/Njlw2O/h5Uo9olb3SYnuAnyf1iBXsVJfZEX6eJBHHsa6yb+6EpYY4jqJgCUsN1efsKAqWsBxQG8c7lqf1Gl6X1Ij8z/awYLR4eoXXJTV6wDFhqZYMx4SlQjIcE5YKSXEUTlg+SoWjcMKyJRWOwgnLlpQ4CicsbyKX3bpTHLlJwnKlh+Pd7Fr4/ehEy+2/TmH6HDuWBjgKx40lKZ9/S4qidsxYMhz/dAoy7Hc4TjSqzzmRFGTIcWI5CsfGpMhf4HiL10gchePDciSOwgSOt2iRYvMiKYKRo8LSEserafn0BsedTdejLTtElm1WG16jh6Kx1L2rz9mlc3Hk/jpnJ16bh2K1Rav8AL8Uq2mZ6WF/zUgxP20MwS/TRaVB9NgZbOkusw8lgkOKCdHOi32sFr8gsLmxOf6C87YS37tiL0Hr/ITNfE58bnC+k2kxmU2WrVwpdEQHs5UrhbggaGcrVwoms7F7NM5WrnRFtMr/dm4Si22zlSthRHS2F/tYoVkQXGQrV/Kd2fiL3Wm2ciVabWdHlBb5Ad5HMGr33M/loNuivOx2hNp/odNV6MpBHvQatTFN7CCx9IKjcGhY+sRROCgsfeIoHBSWXnEUDgVLDDgKB4ElBhyFg8DSGsdm34o3m1j/iceOJf/D27lpE9/2re4YTbDPhrtb0QZH1b6V1T4b5iZio557Yc19q9H7bFixHIOj6b7VbZ8tf4PjDBgnlkZNvvxcs3zewzF0xZ6avdHThhFL7a7CiQ4kDBHF10Sscxru4kxQc0HAheUgjo7PBHUyG6omYiWOIFu5Ekd04OAFD5ZSHOds9mhJgSiO3n5pz71mtnKlvgUBBZYQR9Ns5UqyzOa1t1+IVtvbL2mZrVwJZDa/WN5xnChbuVIbUa9YchxdZCtX4guCVywxP1V9slmMfgD/LUBbUZNfZAAAAABJRU5ErkJggg=='}}
        ></Image>
          </View>
      </View>

      <TouchableOpacity style={{borderWidth: 1,borderColor:'#1511EB',width: '80%',height:80,marginLeft: '10%',marginRight:'10%',
        alignItems: 'center',justifyContent: 'center',flexDirection:'row'}}>
            <AntDesign name="camera" size={40} color='black'></AntDesign>
            <Text style={{fontSize: 18,fontWeight:'bold',marginLeft:10}}>Thêm hình ảnh</Text>
      </TouchableOpacity>
        
      <View style={{borderWidth: 1, borderColor: 'gray', width: '80%', height: 222, margin: '10%', position: 'relative'}}>
  <TextInput 
    placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm'
    multiline={true}
    style={{flex: 1, padding: 10}}
  />
  <TouchableOpacity style={{position: 'absolute', bottom: 10, right: 10}}>
    <Text style={{fontWeight: 'bold'}}>http://meet.google.com/nsj-ojwi-xpp</Text>
  </TouchableOpacity>
</View>

 
      <TouchableOpacity style={{borderRadius: 10,backgroundColor: '#0D5DB6',
      marginLeft: '10%',width:'80%',height:40, marginRight: '10%',
        color: 'white',fontSize: 18,alignItems: 'center',justifyContent: 'center'}}>
          Gửi
      </TouchableOpacity>
      
    </View>
  );
};

export default YourApp;