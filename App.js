import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, Switch } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
      <ScrollView>
        <View style={[styles.header, { backgroundColor: isDarkMode ? '#3e544a' : '#3e544a' }]}>
          
          {/* Profile Details */}
          <View style={styles.profileDetails}>
            <Image
              source={{ uri: 'https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/333888417_1258777984740173_2271997877798019530_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=YAeZEt_p78MQ7kNvgFakbC-&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AoGK4BzPAiNj64GVVu0ldXp&oh=00_AYA8U-ZXiizjKxRao9TC4wgr76tt5V3VDKNFpunGOQO3Fw&oe=670A65D1' }} // Placeholder for profile image
              style={styles.profileImage}
            />
            <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#ffffff' }]}>Ariana Marie Palle</Text>
            <Text style={[styles.email, { color: isDarkMode ? '#aaa' : '#cccccc' }]}>ariana.palle1434@gmail.com</Text>
          </View>
        </View>

        {/* Profile Section */}
        <View style={[styles.section, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
          <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000000' }]}>Profile</Text>
          <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#272727' : '#f0f4f5' }]}>
            <MaterialIcons name="person" size={24} color={isDarkMode ? '#ccc' : '#000000'} style={styles.optionIcon} />
            <Text style={[styles.optionText, { color: isDarkMode ? '#ccc' : '#000000' }]}>Manage user</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={[styles.section, { backgroundColor: isDarkMode ? '#000000' : '#ffffff' }]}>
          <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000000' }]}>Settings</Text>

          <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#272727' : '#f0f4f5' }]}>
            <MaterialIcons name="notifications" size={24} color={isDarkMode ? '#ccc' : '#333'} style={styles.optionIcon} />
            <Text style={[styles.optionText, { color: isDarkMode ? '#ccc' : '#333' }]}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#272727' : '#f0f4f5' }]}>
            <MaterialIcons name="support" size={24} color={isDarkMode ? '#ccc' : '#333'} style={styles.optionIcon} />
            <Text style={[styles.optionText, { color: isDarkMode ? '#ccc' : '#333' }]}>Supports</Text>
          </TouchableOpacity>

          {/* Dark Mode Toggle */}
          <TouchableOpacity style={[styles.option, { backgroundColor: isDarkMode ? '#272727' : '#f0f4f5' }]}>
            <MaterialIcons name="brightness-4" size={24} color={isDarkMode ? '#ccc' : '#333'} style={styles.optionIcon} />
            <Text style={[styles.optionText, { color: isDarkMode ? '#ccc' : '#333' }]}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleDarkMode} style={styles.switch} />
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={[styles.signOutButton, { backgroundColor: isDarkMode ? '#3e544a' : '#3e544a' }]}>
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 20,
    paddingTop: 40,
  },
  profileDetails: {
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#cccccc',
    marginTop: 0,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    marginTop: 6,
  },
  section: {
    marginTop: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  switch: {
    alignSelf: 'flex-end',
  },
  signOutButton: {
    marginTop: 8,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  signOutText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ProfilePage;
