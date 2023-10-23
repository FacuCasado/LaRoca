import { useSelector } from 'react-redux';

function Home() {
	const isLogin = useSelector((state) => state.isLogin);
	const userData = useSelector((state) => state.userData);
	console.log(isLogin);
	console.log(userData);
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center bg-secondary">
			holass
		</div>
	);
}

export default Home;
