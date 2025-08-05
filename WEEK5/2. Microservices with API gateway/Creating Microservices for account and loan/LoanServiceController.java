@RestController
@RequestMapping("/loan")
public class LoanServiceController {

    @GetMapping("/details")
    public String getLoanDetails() {
        return "Loan details from loan service";
    }
}
