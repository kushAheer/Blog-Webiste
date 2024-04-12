namespace Backend.Data.Error
{
    public class Error
    {
        public Error(int statusCode ,string message)
        {
            this.statusCode = statusCode;
            this.message = message;
        }

        public int statusCode { get; private set; }
        public string message { get; private set; }
    }
}
