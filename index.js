function clone(o) {
	const getObj = (obj, c_key) => {
		const keys = [...c_key];
		const len = keys.length;
		const index = keys.shift();

		if (index) {
			if (!obj[index.key] && !index.isArray && len) {
				obj[index.key] = {};
			} else if (!obj[index.key] && index.isArray && len) {
				obj[index.key] = [];
			}
		}

		return len ? getObj(obj[index.key], keys) : obj;
	};

	function map(obj, clone_obj, obj_key) {
		for (const key in obj) {
			if (typeof obj[key] === 'object') {
				const isArray = Array.isArray(obj[key]);
				if (isArray) clone_obj[key] = [];

				map(obj[key], clone_obj, [...(obj_key || []), { key, isArray }]);
			} else {
				if (obj_key === null) {
					clone_obj[key] = obj[key];
				} else {
					const selected_obj = getObj(clone_obj, obj_key);
					selected_obj[key] = obj[key];
				}
			}
		}

		return clone_obj;
	}

	return map(o, {}, null, false);
}

module.exports = clone;
