

const Form = () => {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Phone</label>
                    <input type="number" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Region</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Country</label>
                    <input type="text" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;