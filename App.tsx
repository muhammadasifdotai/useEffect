///////// EXAMPLE COMPONENT RENDER FIRST THEN useEffect ////////////

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function App(): JSX.Element {
//   const [count, setCount] = useState<number>(0);

//   useEffect(() => {
//     // This will run after the initial render
//     console.log('useEffect called');
//   }, [count]); // The effect depends on `count`, so it will run after every render where `count` changes

//   const handleIncrement = (): void => {
//     setCount(count + 1);
//   };

//   console.log('Component rendered');

//   return (
//     <View style={styles.container}>
//       <Text>{count}</Text>
//       <TouchableOpacity style={styles.increment} onPress={handleIncrement}>
//         <Text>Increment</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   increment: {
//     borderWidth: 1,
//     height: 70,
//     width: 101,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 11,
//     marginTop: 11,
//     backgroundColor: 'orange',
//   },
// });


//////////// useEffect ///////////

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  // Three ways of using useEffect
// 1. Without empty dependency
useEffect(() => {
  console.log('useEffect without empty dependency run every time when component re-render')
})

// 2. With empty dependency
useEffect(() => {
  console.log('useEffect with empty dependency run one time when component re-render')
}, [])

// 3. With dependency, is may hum nay count add kr deya hay, jis ki value change ho rhi button click pr.
  useEffect(() => {
    // This will run after the initial render
    console.log('useEffect with dependency run every time when component re-render when the value of count change')
  }, [count]); // The effect depends on `count`, so it will run after every render where `count` changes

  const handleIncrement = (): void => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <TouchableOpacity style={styles.increment} onPress={handleIncrement}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  increment: {
    borderWidth: 1,
    height: 70,
    width: 101,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    marginTop: 11,
    backgroundColor: 'orange',
  },
});
