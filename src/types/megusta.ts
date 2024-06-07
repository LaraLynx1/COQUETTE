export type Megusta = {
	id: string;
	user: string;
	postId: string;
};
export type Megustaform = Omit<Megusta, 'id'>;
