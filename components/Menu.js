import React from 'react';
import Link from 'next/link';

import style from './Menu.module.scss';

export default function Menu() {
	return (
		<div className={style.menu}>
			<ul>
				<li>
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li>
					<Link href="/movies">
						<a>Películas</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contactos</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
