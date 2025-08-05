@RestController
@RequestMapping("/account")
public class AccountServiceController {

    @GetMapping("/details")
    public String getAccountDetails() {
        return "Account details from account service";
    }
}
