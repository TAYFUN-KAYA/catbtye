import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  im,
} from 'react-native';

const {createContext, useState} = require('react');

const DetailContext = createContext();

const DetailProvider = ({children}) => {
  const [showDetailPage, setShowDetailPage] = useState(false);

  const [user, setUser] = useState(null);
  const getDetailById = (id, data) => {
    const item = data.filter(o => o.id === id);
    console.log(item[0].email);
    setUser(item[0]);
    setShowDetailPage(true);
  };

  return (
    <DetailContext.Provider value={{getDetailById}}>
      {showDetailPage && (
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex:1
            }}>
            {/* <Image
              style={{width: 200, height: 200}}
              source={require(user?.image)}
            /> */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop:100,
              }}>
                <Text style={{paddingBottom:10}}>Name : {user.firstName}</Text>
                <Text style={{paddingBottom:10}}>Name : {user.lastName}</Text>
                <Text style={{paddingBottom:10}}>Age : {user.age}</Text>
                <Text style={{paddingBottom:10}}>Adress : {user.address.address}</Text>
                <Text style={{paddingBottom:10}}>city : {user.address.city}</Text>
                <Text style={{paddingBottom:10}}>State : {user.address.state} - PostalCode : {user.address.postalCode}</Text>
              </View>
          </View>
        </View>
      )}
      {children}
    </DetailContext.Provider>
  );
};

export {DetailContext, DetailProvider};
