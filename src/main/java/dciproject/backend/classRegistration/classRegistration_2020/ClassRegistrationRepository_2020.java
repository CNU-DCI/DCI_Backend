package dciproject.backend.classRegistration.classRegistration_2020;


import dciproject.backend.classRegistration.classRegistration_2021.ClassRegistrationPK_2021;
import dciproject.backend.classRegistration.classRegistration_2021.ClassRegistration_2021;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRegistrationRepository_2020 extends JpaRepository<ClassRegistration_2020, ClassRegistrationPK_2020> {

}
