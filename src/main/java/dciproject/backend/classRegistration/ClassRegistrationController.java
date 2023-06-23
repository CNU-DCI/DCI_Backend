package dciproject.backend.classRegistration;


import dciproject.backend.subjectStatistics.Period;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
public class ClassRegistrationController {
    private final ClassRegistrationService classRegistrationService;

    public ClassRegistrationController(ClassRegistrationService classRegistrationService) {
        this.classRegistrationService = classRegistrationService;
    }


    @PostMapping("/api/databuild213888aa28C")
    private String getData(){
        for(int year=2020;year<2023;year++){
            String period[]=new String[]{Period.getPeriod(year,1,4)[0],Period.getPeriod(year,2,4)[0]};
            long t1=Long.parseLong(period[0])-3000+2959;
            long t2=Long.parseLong(period[1])-3000+2959;
            period[0]=String.valueOf(t1);
            period[1]=String.valueOf(t2);

            classRegistrationService.databuild(year,period[0],period[1]);
        }

        return "Complete";
    }


    @GetMapping("/api/registration/read") // 하나의 과목에 대한 수강신청 정보 가져오기(List)
    private List<ClassRegistration> read(@RequestParam String subjectID){
        return classRegistrationService.findBySubjectId(subjectID);
    }

}
