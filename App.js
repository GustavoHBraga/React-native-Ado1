 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   FlatList,
   View,
   Pressable,
   Modal
 } from 'react-native';
import ShowModal from './showModal';
 
 
 export default class App extends Component{
   
   constructor(props){
     super(props)
     this.state ={
       data: [],
       isVisible: false
     }
   } 
 
   mudaModal(){
      
   }
 
   loadUser = () => {
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(responseJson => {
       this.setState({
         data:responseJson || []
       })
     })
   }
 
   componentDidMount(){
     this.loadUser();
   }

   itemModal = ({item}) => (
    
    <View style={styles.container}>

        
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            this.setState({ isVisible: false });
          }}
        >
          <View style={styles.modalView}>
            
            <Pressable onPress={() => {
              this.setState({ isVisible: false }); }}>
              <Text style={styles.paragraph}>{item.email}</Text>
            </Pressable>

          </View>
        </Modal>


        <Pressable onPress={() => {
            this.setState({ isVisible: true });
            
          }}>
            <Text style={styles.paragraph}>{item.name}</Text>

        </Pressable>
    </View>
   )
 
   render() {
     return (
       <View style={styles.container}>
           <FlatList
             data={this.state.data}
             renderItem={this.itemModal}
             keyExtractor={item => item.id}
           />
       </View>
     )
   }
     
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: '#ecf0f1',
     padding: 8,
   },
   paragraph: {
     margin: 15,
     padding: 10,
     fontSize: 22,
     color:'white',
     fontWeight: 'bold',
     textAlign: 'center',
     backgroundColor: '#1E90FF',
     borderRadius:7
   },
   modalView: {
     margin: 'auto',
     backgroundColor: "green",
     borderRadius: 20,
     padding: 35,
     alignItems: "center",
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 2
     },
     shadowOpacity: 0.25,
     shadowRadius: 4,
     elevation: 5
   },
   button: {
     borderRadius: 20,
     padding: 10,
     elevation: 1,
     width:100
   },
   buttonClose: {
     backgroundColor: "#2196F3",
   },
   btnVoltar:{
     color:'white',
     fontSize:12,
     textAlign:'center'
   },
   modalText:{
     marginBottom:55,
     marginTop:55,
     marginHorizontal:55,
     fontSize: 17,
     width: 1000,
     textAlign: 'center'
   },
   centeredView: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
   }
 });
 
 