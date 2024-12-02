import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';
import profile from '../../../public/profile.service.json';

export default component$(() => {
	useStylesScoped$(styles);

	return (
	<footer>
		<a class="top raised" title="Go to top" href="#top">
			<img width={30} height={30} src="../../../images/up.png" alt="upwards pointing arrow" />
		</a>
		<a class="linked-in raised" href={profile.linkedIn}>Connect<span class="shine"></span></a>
	</footer>
	);
});
