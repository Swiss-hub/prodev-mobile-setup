import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <View style={styles.navGroup}>
        <Ionicons name="arrow-back" size={25} />
        <Image source={require('@/assets/images/logo.png')}/>
      </View>
      <Text style={styles.largeText}>Sign in to your</Text>
      <Text style={styles.largeText}>Account</Text>
      <Text style={styles.smallText}>
        Enter your email and password to sign in.
      </Text>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.placeholderText}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.inputField} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.placeholderText}>Password</Text>
          <View style={styles.passwordGroup}>
            <TextInput style={{ flex: 1 }} />
            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
          </View>
        </View>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
      </View>
      <Text style={styles.dividerText}></Text>


    </SafeAreaProvider>
  );
}
