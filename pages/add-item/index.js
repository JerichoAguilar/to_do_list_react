import Head from "next/head";
import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";
import {doc, getDoc, setDoc} from 'firebase/firestore'

import { useAuth } from "../../lib/hooks/useAuth";
import { AddNewItem, ItemID, AddItem, ItemDescription } from "./styles";
import { Button } from "../../components/ui/buttons";
import {AppBar} from '../../components/appbar'

import { db } from "../../lib/firebase";
import { Brand } from "../../components/brand";
 
function AddNewItemPage({...props}) {
  const user = useAuth();
  const [id, setId] = useState("")
  const [description, setDescription] = useState('')

  useState(()=>{
    setId(uuid().substring(0,8))
  },[])

  function handleSubmit(e){
    e.preventDefault();
    const toDo = {
      id,
      description
    }
    console.log(toDo)
     // dynamically make path based on the user `users/${user.uid}`
    const docPath = `users/${user.uid}`
    const userDoc = doc(db, docPath)
    getDoc(userDoc).then(doc=>{
      console.log(doc.data())
    })
    //send the to do to firebase
  }

  return (
    <>
    <AppBar/>
    <AddNewItem>
      <header>
      <Brand/>
      <h2>Add New To Do Item</h2>
      </header>
      <AddItem onSubmit={(e)=> handleSubmit(e)}>
        <ItemID>
          <label htmlFor="uid">uid</label>
          <input type="text" disabled placeholder={id}/>
        </ItemID>
        <ItemDescription styles={{margin:"1rem 0 1.5rem"}}>
          <label htmlFor="description">Description</label>
          <textarea onChange={(e)=> setDescription(e.currentTarget.value)} name="description" id="description" cols="4" rows="3"></textarea>
        </ItemDescription>
        <Button  bgcolor="crimson" color="white">Add New To Do Item</Button>
      </AddItem>
    </AddNewItem>
    </>
  );
}

export default AddNewItemPage;
