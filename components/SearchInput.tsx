"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string"

import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

export default function SearchInput() {

  const router = useRouter()
  const [value, setValue] = useState('');
  const debounvedValue = useDebounce(value, 500)

  useEffect(()=> {
    const query = {
      title: debounvedValue
    }

    const url = qs.stringifyUrl({
      url: '/search',
      query
    })

    router.push(url)
  })
  

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
