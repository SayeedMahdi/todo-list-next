import styles from "./css/Cart.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
	let options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	}
	let today = new Date()
	return (
		<main className=" flex justify-center items-center h-screen">
			<div className="flex  flex-col  h-98 w-80 bg-white rounded-lg text-grayish mx-auto drop-shadow-cs">
				<div className="h-1/4  flex justify-between px-6 rounded-t-lg py-6 bg-gradient-to-r from-cyan-400 to-blue-300">
					<p className="font-bold">
						{today.toLocaleDateString("en-US", options)}
					</p>
					<Link href="#">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 24 24"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							className="text-2xl"
						>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
						</svg>
					</Link>
				</div>

				<div className="h-1/4 px-6 font-bold  py-6 text-greyish flex justify-between items-center">
					<div className="flex flex-col space-y-2">
						<span>9:45</span>
						<span className="text-gray-400 font-small">Team work</span>
					</div>
					<Image
						src="/img/realtor-1.jpeg"
						width={200}
						height={200}
						className="h-7 w-7 rounded-full"
					/>
				</div>

				<div
					className={`${styles.done_tasks} h-1/4 px-6 font-bold rounded-t-lg py-6 text-greyish flex justify-between items-center`}
				>
					<div className="flex flex-col space-y-2">
						<span>9:45</span>
						<p className="text-gray-400 font-small ">Team work</p>
					</div>
					<Image
						src="/img/realtor-3.jpeg"
						width={200}
						height={200}
						className="h-7 w-7 rounded-full"
					/>
				</div>
			</div>
		</main>
	)
}
