package com.phc.priorityranking.model;

public class Phc {

    private String id;
    private String name;
    private int buildingCondition;
    private int electricity;
    private int waterSupply;
    private int equipmentScore;
    private int dailyPatients;
    private int bedCapacity;
    private double distanceToHospitalKm;
    private int doctorsAvailable;
    private int doctorsRequired;
    private int nursesAvailable;
    private int nursesRequired;

    public Phc() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getBuildingCondition() { return buildingCondition; }
    public void setBuildingCondition(int buildingCondition) { this.buildingCondition = buildingCondition; }

    public int getElectricity() { return electricity; }
    public void setElectricity(int electricity) { this.electricity = electricity; }

    public int getWaterSupply() { return waterSupply; }
    public void setWaterSupply(int waterSupply) { this.waterSupply = waterSupply; }

    public int getEquipmentScore() { return equipmentScore; }
    public void setEquipmentScore(int equipmentScore) { this.equipmentScore = equipmentScore; }

    public int getDailyPatients() { return dailyPatients; }
    public void setDailyPatients(int dailyPatients) { this.dailyPatients = dailyPatients; }

    public int getBedCapacity() { return bedCapacity; }
    public void setBedCapacity(int bedCapacity) { this.bedCapacity = bedCapacity; }

    public double getDistanceToHospitalKm() { return distanceToHospitalKm; }
    public void setDistanceToHospitalKm(double distanceToHospitalKm) { this.distanceToHospitalKm = distanceToHospitalKm; }
    public int getDoctorsAvailable() { return doctorsAvailable; }
    public void setDoctorsAvailable(int doctorsAvailable) { this.doctorsAvailable = doctorsAvailable; }

    public int getDoctorsRequired() { return doctorsRequired; }
    public void setDoctorsRequired(int doctorsRequired) { this.doctorsRequired = doctorsRequired; }

    public int getNursesAvailable() { return nursesAvailable; }
    public void setNursesAvailable(int nursesAvailable) { this.nursesAvailable = nursesAvailable; }

    public int getNursesRequired() { return nursesRequired; }
    public void setNursesRequired(int nursesRequired) { this.nursesRequired = nursesRequired; }
}