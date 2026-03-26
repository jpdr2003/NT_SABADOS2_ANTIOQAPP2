package com.antioquiapp.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "fav_negocios")
public class FavNegocio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    private String negocioId;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }
    public String getNegocioId() { return negocioId; }
    public void setNegocioId(String negocioId) { this.negocioId = negocioId; }
}