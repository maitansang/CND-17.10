package com.mts.intentbtap;

public class Member {
    String name;
    String number;

    @Override
    public String toString() {
        return "Tên: "+ name + "\n"+"Số điện thoại:" + number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Member(String name, String number) {
        this.name = name;
        this.number = number;
    }
}
