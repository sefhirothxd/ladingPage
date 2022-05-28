const ubicacion = async () => {
	let url = 'https://ipinfo.io/json?token=ada65ee9ca7df1';
	let response = await fetch(url);
	let data = await response.json();
	console.log(data);
	return data;
};

export default ubicacion;
