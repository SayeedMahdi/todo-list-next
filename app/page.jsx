import Image from "next/image"
import styles from "./css/Cart.module.css"
import Link from "next/link"

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
					className={`h-1/4 px-6 ${styles.big_class} font-bold  py-6 text-greyish flex justify-between items-center relative`}
				>
					<div className="flex flex-col space-y-2">
						<span>9:45</span>
						<span className="text-gray-400 font-small">Team work</span>
					</div>
					<Image
						src="/img/realtor-2.jpeg"
						width={200}
						height={200}
						className="h-7 w-7 rounded-full"
					/>
					<ul className="absolute  flex flex-col top-3 right-20 text-gradientBlueEnd">
						<li className="bg-white rounded-full drop-shadow-lg p-1 -translate-y-4 translate-x-6">
							<Link href={"#"}>
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 16 16"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
								</svg>
							</Link>
						</li>
						<li className="bg-white rounded-full drop-shadow-lg p-1">
							<Link href="#">
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 20 20"
									aria-hidden="true"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
								</svg>
							</Link>
						</li>
						<li className="bg-white rounded-full drop-shadow-lg p-1 translate-y-4 translate-x-6">
							<Link href={"#"}>
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 24 24"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
								</svg>
							</Link>
						</li>
						<li className=" rounded-full drop-shadow-lg p-1 -translate-y-11 translate-x-14 text-white ">
							<Link href={"#"}>
								<svg
									stroke="currentColor"
									fill="none"
									stroke-width="0"
									viewBox="0 0 15 15"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
										fill="currentColor"
									></path>
								</svg>
							</Link>
						</li>
					</ul>
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

					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 16 16"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
						className="text-gradientBlueEnd"
					>
						<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
					</svg>
				</div>
			</div>
		</main>
	)
}
