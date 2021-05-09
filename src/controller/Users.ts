class Users {
	public static index(req, res, next): any {
		return res.json({
			message: "Hello Users"
		});
	}
}

export default Users;