import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("New skill");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills((oldSkills) => [...oldSkills, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldSkills) => [...oldSkills.filter((skill) => skill.id !== id)]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12 && currentHour > 4) {
      setGreeting("Good Morning !");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon !");
    } else {
      setGreeting("Good Night !");
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Anthony</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddSkill} activeOpacity={0.7} title="Add" />
      <Text style={[styles.title, { marginVertical: 50 }]}>My skills:</Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard onPress={ ()=> handleRemoveSkill(item.id)} item={item.name} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: "#cecece",
    marginVertical: 2,
  },
});
