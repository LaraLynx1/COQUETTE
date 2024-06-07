export type publicacion = {
	id: string;
	user: string;
	userpfp: string;
	image: string;
	likes: string;
};

export type publicacionform = Omit<publicacion, 'id'>;

export enum Coleccion {
	'publicaciones' = 'publicaciones',
	'megustan' = 'megustan',
}
