import {GoogleProvider} from "../components/authentication/providers";
import { GitHubProvider } from "../components/authentication/providers";
import {AppBar} from "./../components/appbar"
import {Title} from "../components/ui/title"
import {Spacer} from "../components/ui/spacers"
import {UserLogin} from "../components/authentication/user-login"
import {EmailAndPassword} from "../components/authentication/login"
import {Legal, HighLight} from "../components/ui/legal"
import {PageLayout, PageHeader, PageFooter, PageContent} from "../layouts/loginpage"
function index (){  
  return(
    <>
          <AppBar/>
          <PageLayout>
          <PageHeader>
          <Title>Account Login</Title>
          </PageHeader>
          <PageContent>
          <GoogleProvider>With Google</GoogleProvider>
          <GitHubProvider style={{marginTop:"1.5rem"}}>With GitHub</GitHubProvider>
          <Spacer>OR</Spacer>
          <UserLogin/>
          </PageContent>
          <PageFooter>
          <Legal>Legal Stuff <HighLight>Terms and Conditions</HighLight></Legal>
          </PageFooter>
          </PageLayout>
    </>
  )
}



export default index;