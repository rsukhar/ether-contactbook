import Layout from "../components/Layout";
import {Button} from "semantic-ui-react";
import {useRouter} from "next/router";

const Index = () => {
	const router = useRouter();
	return ( <Layout>
		<Button.Group>
			<Button primary onClick={() => router.push('/show/')}>View</Button>
			<Button.Or />
			<Button positive onClick={() => router.push('/add/')}>Create</Button>
		</Button.Group>
	</Layout> );
};

export default Index;