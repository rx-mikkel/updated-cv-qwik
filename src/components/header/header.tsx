import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";
import profile from "../../profile.service.json";

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class='stuck-top'>
			<header>
				<div class='wrap'>
					<div class='section'>
						<h1>{profile.userName}</h1>
						<div class='contact'>
							<h2 style='margin-top: 0em; line-height: 1.4em;'>
								{profile.title}
							</h2>
						</div>
					</div>
					<div class='bubble'>
						<img
							width={176}
							height={176}
							src='../../../images/cv.webp'
							alt='Image of me'
						/>
					</div>
				</div>
			</header>
		</div>
	);
});
