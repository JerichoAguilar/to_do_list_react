import {useAuth} from "../lib/hooks/useAuth"
import { AppBar } from "../components/appbar";
import {Title} from "../components/ui/title"


function ToDoPage(props) {
   const user = useAuth();
    if(user){
      return (
        <>
          <AppBar />
          <Title>Render And Build To Do List</Title>
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
