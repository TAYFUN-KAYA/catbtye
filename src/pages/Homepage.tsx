import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View,FlatList,SafeAreaView, Image, TouchableOpacity,TextInput } from 'react-native';
import { api } from '../api/api';
import { DetailContext } from '../context/DetailCtx';
import {connect} from "react-redux"
import { SET_USER } from '../store/actions';
import Form, {TYPES} from 'react-native-basic-form';

export type Props = {
  name: string;
  age: number;
};


const Homepage: React.FC<Props> = ({
 users
}) => {

  const [result, setResult] = useState<Props[]>([]);


  const [showDetailPage, setShowDetailPage] = useState(true)
  const [showAddPage, setshowAddPage] = useState(false)


  useEffect(()=>{
    const api = async () => {
      const data = await fetch("https://dummyjson.com/users", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.users);
      SET_USER(jsonData.users)
    };

    api();



  },[])
  const [firstName, onChangefirstName] = React.useState(null);
  const [lastName, onChangeLastName] = React.useState(null);
  const [age, onChangeAge] = React.useState(null);
  const [adress, onChangeAdress] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);
  const [image, onChangeImage] = React.useState(null);

  const addNewUser = ()=>{
    SET_USER([...users,{id:users[users.length -1].id +1,firstName:firstName,LastName:lastName,age:age, adress:{adress:adress,city:city},image:image }])
    setshowAddPage(false)
    setShowDetailPage(true)
  }

  const {getDetailById} = useContext(DetailContext);
  return (
    <SafeAreaView style={styles.container}>
      {showDetailPage && <><FlatList
        data={result}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 1,justifyContent:"center",alignItems:"center",paddingTop:30 }} >
            <TouchableOpacity onPress={()=>{getDetailById(item?.id,result); setShowDetailPage(false)}}>
              <View style={{width:100, height:100,backgroundColor:"black",justifyContent:"flex-end",alignItems:"center"}}>
                <Text style={{color:"white"}}>{item?.firstName},{item?.age}</Text>
              </View>
            </TouchableOpacity>
            
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
      <View style={{display: "flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:30}}>
        <TouchableOpacity style={{backgroundColor:"blue",padding:10,borderRadius:8,width:100,alignItems:"center"}} onPress={()=>{setshowAddPage(true),setShowDetailPage(false)}}>
          <Text style={{color:"white"}}>Add</Text>
        </TouchableOpacity>
      </View></>}
      {showAddPage && <>
      <View>
        <View style={{display: "flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:30}}>
        <TextInput
          style={styles.input}
          onChangeText={onChangefirstName}
          value={firstName}
          placeholder="FirstName"
          keyboardType="numeric"
          placeholderTextColor={"gray"}

        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="LastName"
          keyboardType="numeric"
          placeholderTextColor={"gray"}

        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="Age"
          keyboardType="numeric"
          placeholderTextColor={"gray"}

        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAdress}
          value={adress}
          placeholder="Adress"
          keyboardType="numeric"
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCity}
          value={city}
          placeholder="City"
          keyboardType="numeric"
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeImage}
          value={image}
          placeholder="Image Url"
          keyboardType="numeric"
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity style={{backgroundColor:"blue",padding:10,borderRadius:10,marginTop:10}} onPress={addNewUser}>
          <Text style={{color:"white"}}>Add New User</Text>
        </TouchableOpacity>
        </View>
      </View></>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  input: {
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:"black"
  },
});

const S = (state) =>({
  users:state.users
})
export default connect(S)(Homepage);