import { Injectable } from '@nestjs/common';
import { Usecase } from 'src/abstract/usecase';
import { AvalicaoDto } from 'src/presentation/rest/avaliacao/dto/avaliacao.dto';
import { Avaliacao } from '../entity/avaliacao.entity';

@Injectable()
export class CreateAvaliacaoUsecase implements Usecase<AvalicaoDto, Avaliacao> {
  public async execute(input: AvalicaoDto): Promise<Avaliacao> {
    throw new Error('Method not implemented.');
  }
}
