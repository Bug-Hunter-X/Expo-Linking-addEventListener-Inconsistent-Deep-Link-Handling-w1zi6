import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialURL = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };
    getInitialURL();
  }, []);

  useEffect(() => {
    const subscription = Linking.addEventListener('url', (event) => {
      // Handle the incoming URL
      console.log('URL event:', event.url);
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      // Handle the initial URL (if the app was launched via a deep link)
      console.log('Initial URL:', initialUrl);
    }
  }, [initialUrl]);

  return (
    <View>
      {/* ...Your App Content... */}
    </View>
  );
}

export default App;