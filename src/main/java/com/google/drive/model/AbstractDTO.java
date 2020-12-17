package com.google.drive.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class AbstractDTO <T>{
    private String id;
    private String name;
    private String link;
}
