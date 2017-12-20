const fetchItem = (id) => {
	return new Promise(a => {
		setTimeout(() => {
			a({ id: id })
		}, 300)
	})
};


export default fetchItem;