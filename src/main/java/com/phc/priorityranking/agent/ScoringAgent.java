public class StaffingAgent {

    public double calculateStaffingScore(int doctorsAvailable,
                                         int doctorsRequired,
                                         int nursesAvailable,
                                         int nursesRequired) {

        // Calculate shortage
        int doctorGap = doctorsRequired - doctorsAvailable;
        int nurseGap = nursesRequired - nursesAvailable;

        // Avoid negative values
        if (doctorGap < 0) {
            doctorGap = 0;
        }

        if (nurseGap < 0) {
            nurseGap = 0;
        }

        // Calculate percentage shortage
        double doctorScore = ((double) doctorGap / doctorsRequired) * 100;
        double nurseScore = ((double) nurseGap / nursesRequired) * 100;

        // Final staffing score
        double finalScore = (doctorScore + nurseScore) / 2;

        return finalScore;
    }
}