import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SafeAreaView,
  SectionList,
} from 'react-native';
import React, {useState} from 'react';

const ListViews = () => {
  const [listItems, setListItems] = useState([
    {key: 1, name: 'ietm 1'},
    {key: 2, name: 'ietm 2'},
    {key: 3, name: 'ietm 3'},
    {key: 4, name: 'ietm 4'},
    {key: 5, name: 'ietm 5'},
    {key: 6, name: 'ietm 6'},
    {key: 7, name: 'ietm 7'},
    {key: 8, name: 'ietm 8'},
    {key: 9, name: 'ietm 9'},
    {key: 10, name: 'ietm 10'},
    {key: 11, name: 'ietm 11'},
    {key: 12, name: 'ietm 12'},
  ]);
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setListItems([...listItems, {key: 68, name: 'my name'}]);
    setRefreshing(false);
  };
  return (
    <SectionList
    keyExtractor={item => item.key}
    sections={DATA}
    renderItem={({item}) => {
                console.log('item of keyExtractor', item);
                return (
                //   <View
                //     style={[
                //       {
                //         backgroundColor: 'red',
                //         justifyContent: 'center',
                //         alignItems: 'center',
                //         margin: 10,
                //       },
                //     ]}>
                    <Text style={[{marginVertical: 20, color: 'black',textAlign:"center"}]}>
                      {item}{' '}
                    </Text>
                //   </View>
                );
              }}
              renderSectionHeader={({section}) => {
                console.log('item of keyExtractor', section);
                return (
                  <View
                    style={[
                      {
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                      },
                    ]}>
                    <Text style={[{marginVertical: 20, color: 'white'}]}>
                      {section.data}{' '}
                    </Text>
                  </View>
                );
              }}
     
    />

    // <SafeAreaView>
    //   <ScrollView>
    //     <FlatList
    //       data={listItems}
    //       keyExtractor={item => item.key}
    //       renderItem={({item}) => {
    //         console.log('item of keyExtractor', item);
    //         return (
    //           <View
    //             style={[
    //               {
    //                 backgroundColor: 'red',
    //                 justifyContent: 'center',
    //                 alignItems: 'center',
    //                 margin: 10,
    //               },
    //             ]}>
    //             <Text style={[{marginVertical: 20, color: 'white'}]}>
    //               {item.name}{' '}
    //             </Text>
    //           </View>
    //         );
    //       }}
    //     />
    //   </ScrollView>
    // </SafeAreaView>




    // <ScrollView
    // style={[{marginVertical: 20, backgroundColor: 'white'}]}
    // refreshControl={<RefreshControl
    // refreshing={Refreshing}
    // onRefresh={onRefresh}
    // colors={["red"]}
    // />}

    // >
    //   {listItems.map(list => {
    //     return (
    //       <View
    //         style={[
    //           {
    //             backgroundColor: 'blue',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             margin: 10,
    //           },
    //         ]}>
    //         <Text
    //           key={list.key}
    //           style={[
    //             {margin: 10, color: 'white', fontStyle: 'italic', fontSize: 20},
    //           ]}>
    //           {list.item}{' '}
    //         </Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
};

export default ListViews;
