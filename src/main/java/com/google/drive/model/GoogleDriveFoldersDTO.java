package com.google.drive.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
public class GoogleDriveFoldersDTO extends AbstractDTO<GoogleDriveFoldersDTO> implements Serializable {
}
