import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './position.css?inline';

interface positionProps {
    title: string;
	company: string;
	companyWebsite?: string;
	period: string;
	description: string[];
	links: string[] | undefined;
}

export default component$((position: positionProps) => {
	useStylesScoped$(styles);

	return (
		<div class="experience fire">
			<h3>{position.title}</h3>
			<span class="experienceWhen">
				{ position.companyWebsite ? <a class="companyLink" href={position.companyWebsite}>{position.company}</a> : <span style={{fontWeight: 400}}>{position.company}</span> }, {position.period}
			</span> 
			{position.description.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
			{ position.links ? position.links.map((link, index) => (<div key={index} class="link-container"><a href={link} target="_blank">{link}</a></div>)) : null}
		</div>
	);
});
