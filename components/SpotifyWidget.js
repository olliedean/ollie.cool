import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function SpotifyWidget() {

	const { data: now } = useSWR("/api/nowplaying", fetcher, {
		refreshInterval: 2000,
	})

		
	return (
		<>
		<a href={now?.songUrl} target="_blank" rel="noreferrer" className="decoration-transparent">
		  <div
			className={`transform group hover:shadow-lg hover:scale-105
			transition duration-150 ease-in-out ${now?.isPlaying ? "bg-emerald-500" : "bg-gray-600" } p-2
			rounded-lg w-72 cursor-pointer mx-auto`}
		  >
			<span className="text-xs text-gray-100 font-extrabold">
			  {now?.isPlaying ? "CURRENTLY PLAYING" : "LAST PLAYED" }
			</span>
			<div class="flex pt-2 items-center">
			  <img
				src={now?.albumImageUrl}
				alt="currently playing spotify cover"
				className="w-12 rounded"
			  />
			  <div className="leading-none text-white font-semibold pl-2 truncate text-sm">
				{now?.title} <br />
				<span class="text-gray-200 text-xs font-normal">{now?.artist}</span>
			  </div>
			</div>
			<div class="group-hover:text-white absolute top-0 right-0 mt-2 mr-2 text-gray-200">
			  <FontAwesomeIcon icon={faSpotify} size="lg" />
			</div>
		  </div>
		</a>
	  </>
	)
}