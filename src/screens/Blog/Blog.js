import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ms } from 'react-native-size-matters'

export default function Blog() {
  const [datas, setData] = useState([])

  // const ambilData = async () => {
  //   const res = await (await fetch('https://pdlblogs.pucukdaunlestari.com/api/post')).json()
  //   setData(res.data)
  //   console.log(datas)
  // }

  // useEffect(() => {
  //   ambilData();
  // }, [])
  return (
    <ScrollView>
      {
        datas.map((data) => {
          return (
            <View>
              <Text style={{ fontSize: ms(14), fontWeight: '700', lineHeight: ms(24) }} key={data.id}>
                {data.title}
              </Text>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({})