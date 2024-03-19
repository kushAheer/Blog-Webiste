namespace BlogWeb.Utils
{
    public class ValidationError
    {
        private readonly string _message;
        public ValidationError(string message)
        {
            _message = message;
        }
        public string GetMessage() {
            return _message;
        }
    }
}
