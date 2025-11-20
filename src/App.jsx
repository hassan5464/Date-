import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ReactLenis } from 'lenis/react'


const App = () => {
	return (
		<ReactLenis root>

			<main className=" relative min-h-screen w-screen overflow-x-hidden  ">
				<Navbar />
				<Hero />

				
				<div className="bg-cyan-600 h-screen z-10">
					<h1>A bite full of all nutritional values</h1>

				</div>
			</main>
		</ReactLenis>
	);
};

export default App;
