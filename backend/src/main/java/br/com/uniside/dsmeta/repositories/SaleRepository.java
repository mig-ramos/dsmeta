package br.com.uniside.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.uniside.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
