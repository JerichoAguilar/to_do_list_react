import {useAuth} from "../lib/hooks/useAuth";
import { AppBar } from "../components/appbar";
import {Title} from "../components/ui/title"
import {Button} from "../components/ui/buttons";
import Link from "next/link";


function ToDoPage(props) {
   const user = useAuth();
    if(user){
      return (
        <>
          <AppBar />
          <Title>Render And Build To Do List</Title>
          <Button>
              <Link href="/add-item"><a>Add New Item</a></Link>
          </Button>
        </>
      )
    }
    else{
      return (
        <>
          <AppBar />
          <Title>Please Go Way</Title>
        </>
      )
    }
  
}

export default ToDoPage;
