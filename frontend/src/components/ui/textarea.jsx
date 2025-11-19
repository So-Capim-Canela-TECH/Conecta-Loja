/**
 * Componente Textarea - Campo de texto multilinha customizável
 *
 * Componente de entrada de texto multilinha baseado no padrão dos componentes UI,
 * com estilização personalizada usando Tailwind CSS. Suporta redimensionamento,
 * foco visual, estados desabilitados e responsividade.
 *
 * Estilos incluídos:
 * - Bordas arredondadas e foco com ring
 * - Placeholder com cor muted
 * - Estados disabled e focus
 * - Altura mínima configurável
 * - Responsividade para mobile/desktop
 *
 * @param {Object} props - Propriedades do componente
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {number} [props.rows=3] - Número de linhas visíveis
 * @param {string} [props.resize="vertical"] - Comportamento de redimensionamento
 * @param {React.Ref} ref - Referência para o elemento textarea
 *
 * @returns {JSX.Element} Elemento textarea renderizado
 *
 * @example
 * // Textarea básico
 * <Textarea placeholder="Digite sua mensagem" />
 *
 * // Textarea com mais linhas
 * <Textarea rows={5} placeholder="Descrição detalhada" />
 *
 * // Textarea não redimensionável
 * <Textarea resize="none" placeholder="Comentário curto" />
 */

import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(
  (
    {
      className,
      rows = 3,
      resize = "vertical",
      label,
      description,
      error,
      required = false,
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const textareaId = id || `textarea-${Math.random()?.toString(36)?.substr(2, 9)}`;

    // Base textarea classes
    const baseTextareaClasses =
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    // Apply resize behavior
    const resizeClass = resize === "none" ? "resize-none" :
                       resize === "horizontal" ? "resize-x" :
                       resize === "vertical" ? "resize-y" : "resize";

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              error ? "text-destructive" : "text-foreground"
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <textarea
          rows={rows}
          className={cn(
            baseTextareaClasses,
            resizeClass,
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          id={textareaId}
          {...props}
        />

        {description && !error && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}

        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
