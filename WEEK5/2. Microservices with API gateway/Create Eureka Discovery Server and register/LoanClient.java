@FeignClient(name = "loan-service")
public interface LoanClient {
    @GetMapping("/loan/details")
    String getLoanDetails();
}
