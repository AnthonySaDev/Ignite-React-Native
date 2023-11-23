import React from 'react'
import { Text, TouchableOpacity,TouchableOpacityProps, StyleSheet } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    item: string; 
  }
export function SkillCard({item, ...rest}:SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
    <Text style={styles.textSkill}>{item}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonSkill: {
      backgroundColor: "#1f1e25",
      padding: 15,
      borderRadius: 50,
      alignItems: "center",
      marginVertical:10,
    },
  
    textSkill: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
    },
  });