class Validate {
	public static index(req, res, next): any {
		return res.json({
			message: "Validate Access"
		});
	}
}

export default Validate;